import { ButtonHTMLAttributes } from 'react';

export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export interface GenreProps {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    handleClickButton: (genreId: number) => void;
}

export interface ContentProps {
    selectedGenre: GenreResponseProps;
    movies: MovieProps[];
}

export interface MovieCardProps {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
}

export interface IconProps {
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    color: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    selected: boolean;
}

export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}