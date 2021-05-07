import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import FreeSoftware from '../components/FreeSoftware';
import BuiltByVolunteers from '../components/BuiltByVolunteers';
import MoreClients from '../components/MoreClients';
import CallToAction from '../components/CallToAction';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero')}>
      <div className="hero-overlay hero-overlay--gradient"></div>
      <div className="hero-mask"></div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1 className="hero-title">The Free Software Media System</h1>
              <p className="hero-text">Jellyfin is the volunteer-built media solution that puts <em>you</em> in control of your media. Stream to any device from your own server, with no strings attached. Your media, your server, your way.</p>
              <a href="https://demo.jellyfin.org/stable" className="button button--secondary button--outline">See it in Action</a>
              <a href="/downloads" className="button button button--primary margin-horiz--md">Download Now</a>
              <a href="" className="button button--secondary button--outline scroll">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The Free Software Media System`}
      description="The volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <FreeSoftware />
        <BuiltByVolunteers />
        <MoreClients />
        <CallToAction />
      </main>
    </Layout>
  );
}
