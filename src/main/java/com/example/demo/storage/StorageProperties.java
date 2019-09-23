package com.example.demo.storage;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageProperties {

    /**
     * Folder location for storing files
     */
    private String location = "src/main/resources/static/songs";
    private String imgsLocation = "src/main/resources/static/images";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

	public String getImgsLocation() {
		return imgsLocation;
	}

	public void setImgsLocation(String imgsLocation) {
		this.imgsLocation = imgsLocation;
	}

    
}
