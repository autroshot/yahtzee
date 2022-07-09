export default function Dice(props: number) {
  const src = `images/dice-${props}.png`;
  const alt = `주사위 ${props}`;

  return (
    <button className="dice">
      <img src={src} alt={alt} />
    </button>
  );
}
