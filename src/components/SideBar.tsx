import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  selectedGenreId: number;
  genres: GenreResponseProps[];
  onGenreChange: (GenreId: number) => void;
}



export function SideBar({selectedGenreId, genres, onGenreChange } :SideBarProps) {   

  return(
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onGenreChange(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );

  
}