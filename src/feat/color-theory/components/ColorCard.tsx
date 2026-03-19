export default function ColorCard({ color }: { color: string }) {
  return (
    <div className="p-4 shadow rounded-xl">
      <div className="h-20 rounded" style={{ background: color }} />
      <p>{color}</p>
    </div>
  );
}