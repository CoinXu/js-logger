/**
 * @date 2018-09-21
 * @author coinxu
 * @description
 */

import { Logger } from "@/index";
import { expect } from "chai";

describe("Logger", function() {

  // static method
  it("Logger.create is a function", function() {
    expect(Logger.create).to.be.a('function');
  });

  it("Logger.setGlobalOptions is a function", function() {
    expect(Logger.setGlobalOptions).to.be.a('function');
  });


  // instance method
  it("Logger instance should have a function named fatal", function() {
    expect(new Logger().fatal).to.be.a('function');
  });

  it("Logger instance should have a function named error", function() {
    expect(new Logger().error).to.be.a('function');
  });

  it("Logger instance should have a function named warn", function() {
    expect(new Logger().warn).to.be.a('function');
  });

  it("Logger instance should have a function named info", function() {
    expect(new Logger().info).to.be.a('function');
  });

  it("Logger instance should have a function named debug", function() {
    expect(new Logger().debug).to.be.a('function');
  });

  it("Logger instance should have a function named trace", function() {
    expect(new Logger().trace).to.be.a('function');
  });

  it("Logger instance should have a function named setLevel", function() {
    expect(new Logger().setLevel).to.be.a('function');
  });

  it("Logger instance should have a function named getOptions", function() {
    expect(new Logger().getOptions).to.be.a('function');
  });

  it("Logger.create('foo') should return a Logger instance", function() {
    expect(Logger.create('foo') instanceof Logger).to.equal(true);
  });

});
