import { useState } from "react";
import Thumb from "../../assets/thumbnail.png";


const PlayGame = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const gameUrl = "https://legomars-3qhzq2dbi-ritesh-yadavs-projects-1eb7168d.vercel.app/";

  const handleStartGame = () => {
    setShowConfirmation(true);
  };

  const handleConfirmRedirect = () => {
    window.open(gameUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl">
        <img
          src={Thumb}
          alt="Game Thumbnail"
          className="w-full mt-24 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Game Description */}
      <div className="mt-4 max-w-2xl text-center">
        <h1 className="text-2xl font-bold mb-2">Lego Mars Adventure</h1>
        <p className="text-gray-300">
          Explore the Red Planet in this exciting brick-building adventure! 
          Build, discover, and survive in the challenging Martian environment.
        </p>
      </div>

      {/* Start Game Button */}
      <button
        onClick={handleStartGame}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Play Game
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-bold mb-4">Ready to Play?</h3>
            <p className="mb-6">
              This game will open in a new tab. Due to security restrictions, we can't embed it directly on this page.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRedirect}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Open Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayGame;