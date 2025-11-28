import React from "react";

interface RecipeVideoProps {
  youtubeUrl: string;
}

const RecipeVideo: React.FC<RecipeVideoProps> = ({ youtubeUrl }) => {
  return (
    <div>
      <h2>Vídeo da Receita</h2>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        Assista no YouTube
      </a>
    </div>
  );
};

export default RecipeVideo;
