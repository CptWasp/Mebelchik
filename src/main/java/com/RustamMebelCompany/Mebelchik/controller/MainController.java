package com.RustamMebelCompany.Mebelchik.controller;

import com.RustamMebelCompany.Mebelchik.entity.Mebel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
public class MainController {

    @Value("${upload.path}")
    private String uploadPath;


    private void saveFile(Mebel mebel, MultipartFile file) throws IOException {
        if (file != null && !file.getOriginalFilename().isEmpty()) {
            File uploadDir = new File(uploadPath);

            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }

            String uuidFile = UUID.randomUUID().toString();
            String resultFilename = uuidFile + "." + file.getOriginalFilename();
            file.transferTo(new File(uploadPath + "/" + resultFilename));
            mebel.setPath(resultFilename);
        }
    }



    @GetMapping("/")
    public boolean showMainPage(){
        return true;
    }


    @GetMapping("/allery")
    public String printHello1(){

        System.out.println("gfjegf111j");
        return "[\n" +
                "  {\"id\": \"0\", \"text\":  \"some text\"},\n" +
                "  {\"id\": \"0\", \"text\":  \"some text\"}\n" +
                "]";
    }


    @PostMapping("/uploadFile")
    public String updateUserMessage(@RequestParam("name") String name,
                                    @RequestParam("file") MultipartFile file) throws IOException {

        Mebel mebel = new Mebel();

        if(!StringUtils.isEmpty(name)) {
            mebel.setName(name);
        }

        saveFile(mebel, file);



        return "redirect:/gllry";
    }

}
