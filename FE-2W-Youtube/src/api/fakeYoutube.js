import axios from 'axios'

export default class FakeYoutube {
    constructor() {}

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }
    async #searchByKeyword(keyword) {
        return (
            axios
                .get(`/videos/search.json`)
                .then((res) => res.data.items)
                // search api는 객체로 설정되어있음 -> 문자열로 덮어씌워 주는 작업 필요
                .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
        )
    }
    async #mostPopular() {
        return axios.get(`/videos/search.json`).then((res) => res.data.items)
    }
}
