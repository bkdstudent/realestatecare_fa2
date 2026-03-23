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
    getInspectorByUsername(username) {
        return apiClient.get(`/inspectors?username=${username}`)
    },
    //Reports...
    getReports() {
        return apiClient.get('/reports')
    },
    getAssignedReports() {
        return apiClient.get('/reports?status=completed')
    },
    getCompletedReports() {
        return apiClient.get('/reports?status=completed')
    },
    getReport(id) {
        return apiClient.get(`/reports/${id}`)
    },
    updateReport(id, data) {
        return apiClient.put(`/reports/${id}`, data)
    },
    getDamageByReport(reportId) {
        return apiClient.get(`/damage?reportId=${reportId}`)
    },
    getModificationsByReport(reportId) {
        return apiClient.get(`/modification?reportId=${reportId}`)
    }


}