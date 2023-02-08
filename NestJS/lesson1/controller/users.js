export function handleUser(req,res, next) {
  res.json ([
    {
      id: 1,
      name: 'Quang Anh',
      address: 'VietNam'
    },
    {
      id: 2,
      name: 'Hoang Anh ',
      address: 'VietNam'
    }
  ])
};