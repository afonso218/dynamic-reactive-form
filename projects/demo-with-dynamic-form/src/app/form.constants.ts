import { Field, FieldType, KeyValuePair } from '@dynamic-form';

export const leftForm: Field[] = [
  {
    name: 'firstName',
    type: FieldType.TEXT_FIELD,
  },
  {
    name: 'lastName',
    type: FieldType.TEXT_FIELD,
  },
  {
    name: 'favoriteFood',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Ice Cream', 'Pizza', 'Tacos'],
  },
  {
    name: 'favoriteColor',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Red', 'Blue', 'Yellow'],
  },
];
export const rightForm: Field[] = [
  {
    name: 'phone',
    type: FieldType.TEXT_FIELD,
  },
  {
    name: 'email',
    type: FieldType.TEXT_FIELD,
  },
  {
    name: 'favoriteSeason',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
  {
    name: 'favoriteMusic',
    type: FieldType.SELECT_DROPDOWN,
    options: ['Classic', 'Country', 'Folk', 'Rap', 'Rock'],
  },
];

export const prefillDataLeft: KeyValuePair[] = [
  { key: 'firstName', value: 'Mickey' },
  { key: 'lastName', value: 'Mouse' },
  { key: 'favoriteFood', value: 'Pizza' },
  { key: 'favoriteColor', value: 'Blue' },
];

export const prefillDataRight: KeyValuePair[] = [
  { key: 'phone', value: '123-456-1212' },
  { key: 'email', value: 'mickey@disney.com' },
  { key: 'favoriteSeason', value: 'Summer' },
  { key: 'favoriteMusic', value: 'Rock' },
];
