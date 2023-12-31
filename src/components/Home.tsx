export const Home = () => {
  return (
    <div className='home'>
      <div className='filter'>
        <h2>Välkommen till "The Zoo"</h2>
        <p>
          Se till att djuren är matade och passa på att läsa lite fakta om dom.
        </p>
        <img
          loading='lazy'
          height={300}
          width={300}
          src='/src/assets/assetstream.webp'
          alt='dog-food'
        />
        <p>OBS! Denna sida har inte sponsrats av Cesar</p>
      </div>
    </div>
  );
};
