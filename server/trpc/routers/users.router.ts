import { router } from '../trpc';
import {
  get,
} from './procedures/users';


export const usersRouter = router({
  get,
});