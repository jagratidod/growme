export default function Card({
  children,
  hover = true,
  className = '',
  padding = 'p-6',
  as: Tag = 'div',
  onClick,
}) {
  return (
    <Tag
      className={`bg-warm-white border-2 border-black rounded-xl shadow-brutal transition-all duration-200 ${
        hover ? 'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover cursor-pointer' : ''
      } ${padding} ${className}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
