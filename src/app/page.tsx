async function getGithubProfile(username: string) {
  const res = await fetch(`https://api.github.com/orgs/${username}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return res.json();
}

export default async function Home() {
  const profile = await getGithubProfile("teacoder-team");

  return (
    <main className='p-10 bg-black text-white min-h-screen'>
      <h2>Профиль: {profile.name}</h2>
      <p>Desc: {profile.description}</p>
      <p>Public Repos: {profile.public_repos}</p>
    </main>
  );
}
