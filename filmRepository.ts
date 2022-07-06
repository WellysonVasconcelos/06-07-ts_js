import model from '../models/filmModel';

export const getAll = () => {
    return model.findAll();
}