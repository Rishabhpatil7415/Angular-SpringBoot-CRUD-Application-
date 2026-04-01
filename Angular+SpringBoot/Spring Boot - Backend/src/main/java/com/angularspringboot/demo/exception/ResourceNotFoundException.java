package com.angularspringboot.demo.exception;

import aj.org.objectweb.asm.commons.SerialVersionUIDAdder;

public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID =1L;
	
	public ResourceNotFoundException(String m) {
		      super(m);
	}
}
