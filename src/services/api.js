import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://69bc341b0915748735bb8a4e.mockapi.io/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    //Inspectors...
    getInspectors() {
        return apiClient.get('/inspectors')
    },
    //Reports...
    getReports() {
        return apiClient.get('/reports')
    },
    getCompletedReports() {
        return apiClient.get('/reports?status=completed')
    }


}