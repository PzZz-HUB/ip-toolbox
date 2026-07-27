

interface ToolIconProps {
  iconData: string;
  className?: string;
}

// Handles simple emojis or future image paths
export function ToolIcon({ iconData, className = '' }: ToolIconProps) {
  // Check if it's an emoji by its length/characteristics
  // A simple heuristic: if it's short, it's likely an emoji. 
  // In the future, this can check for http:// or .svg extension to render an <img />
  const isEmoji = !iconData.includes('.') && iconData.length <= 5;

  if (isEmoji) {
    return (
      <div 
        className={className} 
        style={{ 
          fontSize: '2rem', 
          lineHeight: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '3rem',
          height: '3rem',
          backgroundColor: 'var(--bg-alt)',
          borderRadius: 'var(--radius-md)',
          flexShrink: 0
        }}
        aria-hidden="true"
      >
        {iconData}
      </div>
    );
  }

  // Future-proof for images/SVGs
  return (
    <img 
      src={iconData} 
      alt="" 
      className={className} 
      style={{ 
        width: '3rem', 
        height: '3rem', 
        objectFit: 'contain',
        borderRadius: 'var(--radius-md)'
      }} 
    />
  );
}
