export const getDiagnosisApi = async (model) => {
    const json = await fetch('http://127.0.0.1:5000/api_02', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(model)
    })
    const result = await json.json()
    return result
}
