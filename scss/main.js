const tooltipTrigger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipContent = [...tooltipTrigger].map(tooltipEl => new bootstrap.Tooltip(tooltipEl));
