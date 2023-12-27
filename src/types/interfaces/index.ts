export interface IinputArray {
    onBlur: (e: unknown) => void;
    onChange: (e: React.ChangeEvent<unknown>) => void;
    placeholder: string;
    type: string;
    password?: boolean;
    name: string;
    handleBlur?: (e: unknown) => void;
    value: string;
    errors?: string;
    touched?: boolean;
}

interface IOwner {
    name: string;
    password: string;
    _id: string;
}

export interface IMovie {
    imageUrl: string;
    owner: IOwner,
    title: string;
    year: string;
    _id: string;
}

export interface InputProps {
    onBlur: (e: unknown) => void;
    onChange: (e: React.ChangeEvent<unknown>) => void;
    placeholder: string;
    type: string;
    password?: boolean;
    name: string;
    handleBlur?: (e: unknown) => void;
    value: string;
    errors?: string;
    touched?: boolean;
}

export interface Iuser  {
    email: string;
    password: string;
    _id: string
}

export interface MoviesState {
    movies: Array<IMovie>;
    movie: IMovie | null
    skip: number;
}

export interface ICredentials {
    email: string, 
    password: string
}
