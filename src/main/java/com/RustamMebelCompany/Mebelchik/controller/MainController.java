package com.RustamMebelCompany.Mebelchik.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public boolean showMainPage(){

        return true;
    }


}
