import * as repository from '../repositories/filmRepository';

export const getAll = () => {
    return repository.getAll();
}