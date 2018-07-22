export const setjawaban = (indexarraykata) => {
  return {
    type: "SET_JAWABAN",
    payload: indexarraykata
  }
}

export const setInitialTebakan = (indexarraykata) => {
  return {
    type: "SET_INITIAL_TEBAKAN",
    payload: indexarraykata
  }
}

export const setTebakan = (huruf, index) => {
  return {
    type: "CEK_TEBAKAN",
    payload: {
      huruf: huruf,
      index: index
    }
  }
}

export const kurangiKesempatan = () => {
  return {
    type: "KURANGI_KESEMPATAN"
  }
}

export const setInitialKesempatan = () => {
  return {
    type: "SET_INITIAL_KESEMPATAN",
  }
}

export const tambahKanHuruf = (huruf) => {
  return {
    type: "TAMBAHKAN_HURUF",
    payload: huruf
  }
}

export const kosongKanHuruf = () => {
  return {
    type: "KOSONGKAN_HURUF"
  }
}

export const setMenang = () => {
  return {
    type: "SET_MENANG"
  }
}

export const setKalah = () => {
  return {
    type: 'SET_KALAH'
  }
}
