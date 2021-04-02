export const formatTypeFile = (type) => {
  switch (type) {
    case "pdf":
      return "PDF";
    case "docx":
      return "Word"
    case "xlsx":
      return "Excel";
    case "pptx":
      return "PowerPoint";
    default:
      return;
  }
}
