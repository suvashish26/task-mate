
import express, { Application, Request, Response } from 'express'

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'TypeScript Express server is running smoothly!' });
});

app.listen(PORT,()=>{
    console.log(`[server]: Server is actively listening at http://localhost:${PORT}`);
});


