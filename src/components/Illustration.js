import React from 'react';
import './Illustration.css';

// Lightweight inline-SVG illustrations keyed by "type".
// Used as visual anchors on feed cards and concept pages.
const Illustration = ({ type = 'growth', colors = ['#6366f1', '#8b5cf6'], className = '' }) => {
  const [c1, c2] = colors;
  const gid = `grad-${type}-${c1.replace('#', '')}-${c2.replace('#', '')}`;

  const renderShape = () => {
    switch (type) {
      case 'growth':
        return (
          <>
            <path d="M30 150 L70 120 L100 130 L140 80 L180 95 L220 35"
              fill="none" stroke={`url(#${gid})`} strokeWidth="6"
              strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 150 L70 120 L100 130 L140 80 L180 95 L220 35 L220 170 L30 170 Z"
              fill={`url(#${gid})`} opacity="0.16" />
            <circle cx="220" cy="35" r="7" fill={c2} />
            <circle cx="140" cy="80" r="5" fill={c1} />
          </>
        );
      case 'curve':
        return (
          <>
            <path d="M30 40 Q120 60 130 105 T230 165"
              fill="none" stroke={`url(#${gid})`} strokeWidth="6"
              strokeLinecap="round" />
            <path d="M30 40 Q120 60 130 105 T230 165 L230 170 L30 170 Z"
              fill={`url(#${gid})`} opacity="0.14" />
            <circle cx="130" cy="105" r="6" fill={c2} />
          </>
        );
      case 'pie': {
        const slices = [
          { d: 'M120 120 L120 30 A90 90 0 0 1 209 120 Z', fill: c1 },
          { d: 'M120 120 L209 120 A90 90 0 0 1 145 207 Z', fill: c2 },
          { d: 'M120 120 L145 207 A90 90 0 0 1 45 165 Z', fill: c1, opacity: 0.6 },
          { d: 'M120 120 L45 165 A90 90 0 0 1 120 30 Z', fill: c2, opacity: 0.6 },
        ];
        return slices.map((s, i) => <path key={i} d={s.d} fill={s.fill} opacity={s.opacity ?? 1} />);
      }
      case 'bars': {
        const bars = [60, 100, 75, 130, 95];
        return bars.map((h, i) => (
          <rect key={i} x={28 + i * 36} y={170 - h} width="22" height={h}
            rx="6" fill={i % 2 === 0 ? c1 : c2} opacity={0.65 + (i / bars.length) * 0.35} />
        ));
      }
      case 'scale':
        return (
          <>
            <line x1="120" y1="40" x2="120" y2="160" stroke={c1} strokeWidth="5" strokeLinecap="round" />
            <line x1="60" y1="75" x2="180" y2="75" stroke={c2} strokeWidth="5" strokeLinecap="round" />
            <line x1="60" y1="75" x2="40" y2="120" stroke={c1} strokeWidth="3" />
            <line x1="60" y1="75" x2="80" y2="120" stroke={c1} strokeWidth="3" />
            <line x1="180" y1="75" x2="160" y2="130" stroke={c2} strokeWidth="3" />
            <line x1="180" y1="75" x2="200" y2="130" stroke={c2} strokeWidth="3" />
            <path d="M35 120 A20 20 0 0 1 85 120 Z" fill={c1} opacity="0.55" />
            <path d="M150 130 A25 25 0 0 1 210 130 Z" fill={c2} opacity="0.55" />
            <line x1="80" y1="160" x2="160" y2="160" stroke={c1} strokeWidth="6" strokeLinecap="round" />
          </>
        );
      case 'distribution':
        return (
          <>
            <path d="M20 165 L220 165" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
            <path
              d="M20 165 C55 165 65 40 120 40 C175 40 178 130 200 160 L200 165 L20 165 Z"
              fill={c2} opacity="0.22"
            />
            <path
              d="M20 165 C55 165 65 40 120 40 C165 40 172 108 190 165"
              fill="none" stroke={`url(#${gid})`} strokeWidth="6" strokeLinecap="round" />
            <path
              d="M170 165 C176 138 182 118 190 165 Z"
              fill={c1} opacity="0.75" />
            <line x1="170" y1="40" x2="170" y2="165" stroke={c1} strokeWidth="2" strokeDasharray="4 5" opacity="0.6" />
          </>
        );
      case 'scatter': {
        const points = [
          [45, 145], [70, 120], [60, 100], [95, 110], [110, 80],
          [130, 95], [150, 60], [165, 75], [185, 45], [200, 55],
        ];
        return (
          <>
            <line x1="30" y1="150" x2="30" y2="30" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
            <line x1="30" y1="150" x2="215" y2="150" stroke={c1} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
            <path d="M35 148 L205 42" fill="none" stroke={`url(#${gid})`} strokeWidth="4" strokeLinecap="round" opacity="0.55" strokeDasharray="1 9" />
            {points.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 7 : 5} fill={i % 2 === 0 ? c1 : c2} opacity={0.55 + (i / points.length) * 0.45} />
            ))}
          </>
        );
      }
      case 'cycle':
        return (
          <>
            <circle cx="120" cy="120" r="78" fill="none" stroke={`url(#${gid})`} strokeWidth="8"
              strokeDasharray="300 180" strokeLinecap="round" opacity="0.9" />
            <path d="M190 105 A70 70 0 0 1 175 168" fill="none" stroke={c2} strokeWidth="8" strokeLinecap="round" />
            <polygon points="185,98 200,108 178,118" fill={c2} />
            <circle cx="120" cy="120" r="14" fill={`url(#${gid})`} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg className={`illustration ${className}`} viewBox="0 0 240 180" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      {renderShape()}
    </svg>
  );
};

export default Illustration;