import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Card = styled.div`
    width: 80%;
    border: 1px solid rgb(232, 67, 62);
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;

    &:hover {
        background-color: rgb(255,241,240,0.2);
        cursor: pointer;
        p{
            color: rgb(232, 67, 62);
        }
    }
    background-color: ${(props) => (props.isShow ? "rgb(255,241,240,0.2)" : "")}
`;

const ProjectTitle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1.25 rem;
    margin-right: 1.25 rem;
`;
const Title = styled.p`
  font-size: 1.5rem;
  color: ${(props) => (props.isShow ? "rgb(232, 67, 62)" : "")}
`;

const Issue = styled.div`
    border: 1px solid rgb(232, 67, 62);
    border-radius: 50px;
    padding: 0.25rem 0.5rem;
    font-size: .875rem;
`;
const IssueNum = styled.span`
`;

const ProjectIntro = styled.div`
`;

const ProjectDesc = styled.div`
    color: ${(props) => (props.isShow ? "rgb(232, 67, 62)" : "")}
`;
const List = styled.div`
    display: ${(props) => (props.isShow ? "block" : "none")};
`;
const ListItem = styled.li`
    list-style: none;
`;


const ContributeCard = (props) => {
    const { repoName } = props;
    const [isShow, setisShow] = useState(false);
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        getGitHubIssuesInfo(repoName).then((result) => {
            setIssues(result)
        });
    }, []);
    return (
        <Card onClick={() => setisShow(!isShow)} isShow={isShow}>
            <ProjectTitle>
                <Title isShow={isShow}>{repoName}</Title>
                <Issue isShow={isShow}><IssueNum>{issues.length}</IssueNum> issues</Issue>
            </ProjectTitle>
            <ProjectIntro>The Cloud-Native API Gateway</ProjectIntro>
            <ProjectDesc isShow={isShow}>lang: Lua  stars: 7.4k </ProjectDesc>
            <List isShow={isShow}>
                <ul style={{ paddingLeft: 0 }}>
                    {issues.map(item => (
                        <ListItem key={item.number}>#{item.number} <a target="_blank" href={item.html_url} style={{ textDecoration: 'none' }}>{item.title} </a></ListItem>
                    ))}
                </ul></List>
        </Card>
    );
};

const getGitHubIssuesInfo = (repo) => {
    return fetch(`https://api.github.com/repos/${repo}/issues?state=open&labels=good%20first%20issue`, {
        headers: {
            "content-type": "application/json",
            Accept: "application / vnd.github.v3 + json",
        },
    }).then((response) => response.json()
    );
};

export default ContributeCard;