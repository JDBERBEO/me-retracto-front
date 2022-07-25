
export const claimsStatusTraductor = (templateStatus) => {
  if( templateStatus === "notChecked") {
    return "Sin revisar"
  }
  if (templateStatus === "underStudy"){
    return "En revisión"
  }
  if (templateStatus === "analysisCompleted"){
    return "Revisión Finalizada"
  }
  return ""
}
