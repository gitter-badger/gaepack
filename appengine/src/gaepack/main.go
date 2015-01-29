package gaepack

import (
	"html/template"
	"net/http"

	"appengine"
)

func init() {
	http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
	err := template.Must(template.ParseFiles("template/index.html")).Execute(w, nil)
	if err != nil {
		c := appengine.NewContext(r)
		c.Errorf(err.Error())
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}
}
