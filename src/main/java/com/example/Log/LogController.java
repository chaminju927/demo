package com.example.Log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {

    @Autowired
    private LogService logService;

    @GetMapping("/logg")
    public void log() {
        logService.log();
    }
}
