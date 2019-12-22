import * as Yup from 'yup';

export class TodoData {

  constructor(
    readonly id: number,
    readonly title: string,
    readonly description: string,
    readonly progress: number
  ) {}

  static empty(): TodoData {
    const now = new Date();
    return new TodoData(now.getTime(), '', '', 0);
  }

  static with(todo?: TodoData): TodoData {
    if(todo !== undefined) {
      return new TodoData(todo.id, todo.title, todo.description, todo.progress);
    } else {
      return this.empty();
    }
  }
}

export const TodoDataSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  progress: Yup.number().required().moreThan(-1, 'Mininum zero allowed').lessThan(101, 'Maximum hundred allowed')
});

