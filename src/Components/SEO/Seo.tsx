import { Helmet } from "react-helmet";
import { logo } from "../../assets/images";
import { FC } from "react";

type SeoProps = {
  title: string;
  desc: string;
  canonical: string;
};

const Seo: FC<SeoProps> = ({ title, desc, canonical }) => {
  console.log(window.location);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="JoFaY's Portfolio" />
      <meta property="og:image" content={`${window.location.origin}/${logo}`} />
      <meta
        property="og:description"
        content="here in this website you can find all information about me..."
      />
    </Helmet>
  );
};

export default Seo;
