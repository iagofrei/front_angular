import { IFilterOption } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const filterUserListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filtredList = usersList.filter((user) =>
    user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return filtredList;
};

const filterUserListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filtredList = usersList.filter((user) => user.ativo === status);

  return filtredList;
};

const filterUserListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) {
    return usersList;
  }

  const listFiltred = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    })
  );

  return listFiltred;
};

const filtredUserList = (
  filterOptions: IFilterOption,
  usersList: IUser[]
): IUser[] => {
  let filtredList: IUser[] = [];

  filtredList = filterUserListByName(filterOptions.name, usersList);

  filtredList = filterUserListByStatus(filterOptions.status, filtredList);

  filtredList = filterUserListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filtredList
  );

  return filtredList;
};

export { filtredUserList };
