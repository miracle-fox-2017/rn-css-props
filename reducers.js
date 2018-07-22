initialState = {
  kata: [
    'border',
    'clear',
    'cursor',
    'display',
    'flex',
    'font',
    'grid',
    'heigth',
    'width'
  ],

  jawaban: [],

  tebakan: [],

  kesempatan: 5,

  InputHuruf: [],

  pesan: ''
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_JAWABAN":
      state.jawaban = state.kata[action.payload].split('')
      return {...state}
    case "SET_INITIAL_TEBAKAN":
      var kolomtebakan = []

      for(var i = 0; i < state.kata[action.payload].length; i++) {
        kolomtebakan.push('')
      }
      state.tebakan = kolomtebakan
      return {...state}

    case "CEK_TEBAKAN":
      state.tebakan[action.payload.index] = action.payload.huruf
      return {...state}
    case "KURANGI_KESEMPATAN":
      state.kesempatan = state.kesempatan - 1
      return {...state}
    case "SET_INITIAL_KESEMPATAN":
      state.kesempatan = 5
      return {...state}
    case "TAMBAHKAN_HURUF":
      state.InputHuruf.push(action.payload)
      return {...state}
    case "KOSONGKAN_HURUF":
      state.InputHuruf = []
      return {...state}
    case "SET_MENANG":
      state.pesan = "SELAMAT ANDA PEMENANGNYA"
      return {...state}
    case "SET_KALAH":
      state.pesan = "SAYANG SEKALI ANDA KALAH"
      return {...state}
    default:
      return {...state}
  }
}

export default reducer
