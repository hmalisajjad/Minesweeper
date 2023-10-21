import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank">
          Learn react
        </Link>
      </Header>
    </div>
  );
}

interface HeaderProps {
  children: React.ReactElement;
  logo: string;
}

const Header= ({
  children,
  logo,
}:HeaderProps): React.ReactNode => {
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {children}
  </header>;
};

interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  children: React.ReactNode;
}

const Link: FC<LinkProps> = ({
  children,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => (
  <a className="App-Link" href={href} target={target} rel="noopener noreferrer">
    {children}
  </a>
);

export default App;
