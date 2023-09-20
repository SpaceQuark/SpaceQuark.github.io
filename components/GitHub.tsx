const GitHub = ({ children: username }: { children: string }) => {
  username = username.trim();
  return (
    <a
      className="bg-primary-300/40 text-primary-800 hover:bg-primary-400/40 hover:text-primary-800 dark:text-primary-50 dark:hover:bg-primary-300/60 hover:dark:text-primary-50 rounded-sm px-1 text-base hover:!no-underline"
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
    >
      @{username}
    </a>
  );
};
export default GitHub;
