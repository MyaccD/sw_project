const initialState = {
  name: 'Kat Williams',
  link: '@Williams',
  profilePhoto: require('../../assets/images/Avatar.png'),
  country: 'Россия',
  city: 'Санкт-Петербург',
  birthDay: '08 октября 1992',
  status: 'They never ask people to do things they wouldn’t do themselves.',
  workplace: 'Artist by Passion!',
  studies: 'ВГУЮ в г. Санкт-Петербург',
};

export function selfInfReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
