export default function PreviewUI({ palette }: any) {
  return (
    <div>
      <button style={{ background: palette.primary }}>
        Button
      </button>

      <div style={{ borderColor: palette.accent }}>
        Card UI
      </div>
    </div>
  );
}