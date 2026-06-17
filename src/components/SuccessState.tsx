interface SuccessStateProps {
  onContinue: () => void;
}

export default function SuccessState({ onContinue }: SuccessStateProps) {
  return (
    <div className="panel rounded-2xl p-9 text-center">
      <p className="text-3xl gold-text mb-4">✦</p>
      <h3 className="font-display text-2xl text-text-warm mb-4">Congratulations.</h3>
      <p className="text-text-warm/90 leading-relaxed mb-2">Your leadership journey has begun.</p>
      <p className="text-text-muted leading-relaxed mb-8">
        Our consultant will contact you shortly. Meanwhile, you may continue exploring
        Wikasatrian.
      </p>
      <button onClick={onContinue} className="btn-gold">
        Continue Exploring
      </button>
    </div>
  );
}
