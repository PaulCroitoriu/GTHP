import React from "react";
import styled from "styled-components";

import List from "../components/List/List";
import Link from "../components/Link/Link";

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 20px 0;
`;

const Avatar = styled.img`
  width: 150px;
  margin-bottom: 40px;
  border-radius: 50%;
`;

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      repositories: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const profile = await fetch("https://api.github.com/users/paulcroitoriu");
      const profileJSON = await profile.json();

      if (profileJSON) {
        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();

        this.setState({
          data: profileJSON,
          repositories: repositoriesJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { data, loading, repositories, error } = this.state;

    if (loading || error) {
      return <div>{loading ? "Loading..." : error}</div>;
    }

    const items = [
      {
        label: "html_url",
        value: <Link url={data.html_url} title="Github URL" />,
      },
      { label: "repos_url", value: data.repos_url },
      { label: "name", value: data.name },
      { label: "company", value: data.company },
      { label: "location", value: data.location },
      { label: "email", value: data.email },
      { label: "bio", value: data.bio },
    ];

    const projects = repositories.slice(0, 10).map(project => ({
      label: project.name,
      value: <Link url={project.html_url} title="Github URL" />,
    }));

    return (
      <ProfileWrapper className="Profile-container">
        <Avatar className="Profile-avatar" src={data.avatar_url} alt="avatar" />
        <List title="Profile" items={items} />
        <br />
        <List title="Projects" items={projects} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
