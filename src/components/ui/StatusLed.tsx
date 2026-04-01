interface StatusLedProps {
  color?: 'cyan' | 'green' | 'warm' | 'danger';
  label?: string;
  size?: 'sm' | 'md';
}

const colorMap = {
  cyan: '#22D3EE',
  green: '#34D399',
  warm: '#F59E0B',
  danger: '#FB7185',
};

export default function StatusLed({ color = 'green', label, size = 'sm' }: StatusLedProps) {
  const fill = colorMap[color];
  const sizeClass = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';

  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`${sizeClass} rounded-full inline-block`}
        style={{
          background: `radial-gradient(circle at 40% 35%, rgba(255,255,255,0.9), ${fill})`,
          boxShadow: `0 0 6px ${fill}80, 0 0 12px ${fill}40`,
          border: '1px solid rgba(255,255,255,0.5)',
        }}
      />
      {label && (
        <span className="font-mono">{label}</span>
      )}
    </span>
  );
}
