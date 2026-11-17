export default function ProcessStep({ step, isLast = false, className = '' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-primary border-2 border-black shadow-brutal-sm flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-black/20 mt-2" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
        <p className="text-sm text-medium-gray leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
