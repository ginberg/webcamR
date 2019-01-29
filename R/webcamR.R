#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
webcamR <- function(captureButton = FALSE, width = NULL, height = NULL, elementId = NULL) {

  # describe a React component to send to the browser for rendering.
  component <- reactR::reactMarkup(
    htmltools::tag("Webcam",
                   list())
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'webcamR',
    component,
    width = width,
    height = height,
    package = 'webcamR',
    elementId = elementId
  )
}

#' Shiny bindings for webcamR
#'
#' Output and render functions for using webcamR within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a webcamR
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name webcamR-shiny
#'
#' @export
webcamROutput <- function(outputId, width = '100%%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'webcamR', width, height, package = 'webcamR')
}

#' @rdname webcamR-shiny
#' @export
renderWebcamR <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, webcamROutput, env, quoted = TRUE)
}

#' Called by HTMLWidgets to produce the widget's root element.
#' @rdname webcamR-shiny
webcamR_html <- function(id, style, class, ...) {
  htmltools::tagList(
    # Necessary for RStudio viewer version < 1.2
    reactR::html_dependency_corejs(),
    reactR::html_dependency_react(),
    reactR::html_dependency_reacttools(),
    htmltools::tags$div(id = id, class = class)
  )
}
