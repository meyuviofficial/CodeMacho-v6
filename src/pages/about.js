import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";

const About = () => {
  return (
    <Layout>
      <Profile name="Yuvaraj Selvarajan" title="Site Reliability Engineer">
        Enthusiastic Software Engineer with almost 4 years of experience in
        managing the life-cycle of Cloud Infrastructure, Kubernetes and it’s
        Security Posture for thousands of Azure Subscriptions. Played a key role
        in maintaining the Compliance of Azure Resources in huge volume by
        building automations that are reliable, native, scalable and
        cost-efficient
      </Profile>
    </Layout>
  );
};

export default About;
