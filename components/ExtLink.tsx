interface LinkInterface {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkInterface) => {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children} <span>↗</span>
      </a>

      <style jsx>{`
        a {
          text-decoration: underline white 1px solid;
        }
        a:hover {
          text-decoration: underline white 1px dashed;
        }
        span {
          width: 50%;
          height: 50%;
        }
      `}</style>
    </>
  );
};

export default Link;
