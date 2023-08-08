interface GameButtonProps {
  text: string;
  onClick?: () => void; // optional property
}

function GameButton({ text, onClick }: GameButtonProps) {
  return (
    <button
      className="w-60 h-12 flex-center
       bg-zinc-500 bg-opacity-30 font-porter
      border-4 border-white rounded-none"
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}

export default GameButton;
