import { Request, Response } from 'express'
import { pool } from '../database'
import { QueryResult } from 'pg'


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users');
        console.log(response.rows);
        return res.json(response.rows).status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error has occurred' });
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.userId);
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.json(response.rows).status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error has occurred' });
    }
}

export const newUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email } = req.body;
        await pool.query('INSERT INTO users (name,email) VALUES($1,$2)', [name, email]);  // $1, $2 first and second parameters
        return res.json({ message: "User created successfully!" }).status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error has occurred' });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.userId);
        await pool.query('DELETE FROM users WHERE id = $1', [id]);  // $1, $2 first and second parameters
        return res.json({ message: `User ${id} deleted successfully!` }).status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error has occurred' });
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.userId);
        const { name, email } = req.body;
        await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);  // $1, $2 first and second parameters
        return res.json({ message: `User ${id} was updated successfully!` }).status(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'An error has occurred' });
    }
}